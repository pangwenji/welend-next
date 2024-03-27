import {TranslationFunction} from "i18next";
import {fromJS} from "immutable";
import withReduxSaga from "next-redux-saga";
import withRedux from "next-redux-wrapper";
import App, {Container} from "next/app";
import {RouterProps} from "next/router";
import * as React from "react";
import {I18nextProvider, NamespacesConsumer} from "react-i18next";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import initialI18nInstance from "../i18n";

import {Root} from "../components";
import makeStore from "../store";

import {ApplicationActions} from "../reducers/applicationReducer";
import {ServerConfigActions} from "../reducers/serverConfigReducer";
import {ThemeProvider, welendTheme} from "../theme";
import Theme from "../theme/theme";

export interface AppProps {
  merchant: string;
  locale: string;
  theme: Theme;
  t: TranslationFunction;
  metaTitle?: string;
  metaDescription?: string;
  metaPath?: string;
  router: RouterProps;
}

export interface Props extends AppProps {
  store: any;
  isServer: boolean;
}

class WelendApp extends App<Props> {
  public static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const { isServer, store, query} = ctx;
    let { locale } = query;
    locale = locale || "tc";
    let i18nInitialProps = {};
    if (isServer) {
      store.dispatch(ApplicationActions.initApplication(locale, query));
      i18nInitialProps = ctx.req
      ? initialI18nInstance.getInitialProps(ctx.req, initialI18nInstance.options.ns)
      : {};

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
    }
    return { i18nInitialProps, pageProps, locale };
  }

  constructor(props) {
    super(props);
    this.getTheme = this.getTheme.bind(this);
  }

  public async componentDidMount() {
    const {store} = this.props;
    store.dispatch(ServerConfigActions.getLoanOptions());
  }

  public render() {
    const {store} = this.props;
    return (
      <Container>
        <Provider store={store}>
          {this.renderPersistGate()}
        </Provider>
      </Container>
    );
  }

  private renderPersistGate() {
    const { Component, pageProps, store, isServer, i18nInitialProps, ...appProps } = this.props;
    const { i18n, initialI18nStore, initialLanguage } = i18nInitialProps;
    const theme = this.getTheme();

    const root = (
      <I18nextProvider
        i18n={i18n || initialI18nInstance}
        initialI18nStore={initialI18nStore}
        initialLanguage={initialLanguage}
      >
        <NamespacesConsumer
          {...pageProps}
          ns={initialI18nInstance.options.ns}
          wait={false}
        >
          {(t) => (
            <ThemeProvider theme={theme}>
              <Root>
                <Component {...appProps} theme={theme} {...pageProps} t={t} />
              </Root>
            </ThemeProvider>
          )}
        </NamespacesConsumer>
      </I18nextProvider>
    );

    if (store.__persistor) {
      return (
        <PersistGate persistor={store.__persistor} loading={null}>
          {root}
        </PersistGate>
      );
    } else {
      return root;
    }
  }

  private getTheme() {
    return welendTheme;
  }
}

export default withRedux(makeStore, {
  serializeState: (state) => state.toJS(),
  deserializeState: (state) => fromJS(state),
})(withReduxSaga(WelendApp));
