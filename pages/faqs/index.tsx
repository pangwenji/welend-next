import { css, cx } from "emotion";
import * as React from "react";
import { AngleLeftIcon, AngleRightIcon, Collapse, Column, Container, MinusIcon, Panel, PlusIcon, Row } from "../../components";
import Layout from "../../containers/layout";
import { AppProps } from "../_app";
import { faqCategories, faqQuestions } from "./data";

interface State {
  selectedCategory: string;
  questions: any[];
  selected: boolean;
}

interface StateProps {
}

interface OwnProps {
}

export interface DispatchProps {
}

type Props = OwnProps & StateProps & DispatchProps & AppProps;

class Faqs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedCategory: faqCategories.all,
      questions: faqQuestions,
      selected: false,
    };

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.backToCategory = this.backToCategory.bind(this);
  }

  public render(): any {
    const { selectedCategory } = this.state;
    const { t, theme } = this.props;
    return (
      <Layout
        {...this.props}
        metaTitle={t("common:meta-data:title:faqs")}
        metaPath="faqs"
        // metaDescription={t("common:meta-data:description:faqs")}
      >
        <div
          className={cx(css(`
          background-color: #F0F2F2;
          padding-top: 60px;
          @media (max-width: ${theme.Config.mobileWidth}px) {
            padding: 30px 0;
          }
        `, ""))}
        >
          <h1 style={{display: "none"}}>{t("common:h1:text:faqs")}</h1>
          <Container
            className={css(`
            max-width: 1220px;
            margin-right: auto;
            margin-left: auto;
            @media (max-width: ${theme.Config.tabletWidth}px) {
              display: none;
            }
          `)}
          >
            <Row>
              <Column xs={24} md={6}>
                <div className="">
                  {this.renderCategories()}
                </div>
              </Column>
              <Column
                xs={24}
                md={18}
                className={css(`
                border-left: 1px solid #ffffff;
                padding-left: 2rem;
              `)}
              >
                <div className={cx(css`margin-bottom: 30px;`, "text-size-double")}>
                  {t("faq:title")}
                </div>
                <div className="">
                  {t(`faq:faq-data.${selectedCategory}`)}
                </div>
                <div className={css`padding: 30px 0`}>{this.renderQuestions()}</div>
              </Column>
            </Row>
          </Container>
          <div
            className={css(`
            @media (min-width: ${theme.Config.tabletWidth + 1}px) {
              display: none;
            }
          `)}
          >
            <div className="text-size-double text-center">
              {t("faq:title")}
            </div>
            {this.renderMobile()}
          </div>
        </div>
      </Layout>
    );
  }

  public renderMobile() {
    const { selected, selectedCategory } = this.state;
    const { t, theme } = this.props;
    if (selected) {
      return (
        <div>
          <div onClick={this.backToCategory} className={cx(css(`margin: 15px;`), "text-color-primary")}>
            <AngleLeftIcon color={theme.Colors.primary} />
            {t(`faq:faq-data.${selectedCategory}`)}
          </div>
          {this.renderQuestions()}
        </div>
      );
    } else {
      return this.renderCategories();
    }
  }

  public renderCategories() {
    const { selectedCategory } = this.state;
    const { t, theme } = this.props;
    return Object.values(faqCategories).map((item) => {
      return (
        <div
          className={cx(css(`
            &:hover {
              color: ${theme.Colors.primary}
            }
            @media (max-width: ${theme.Config.tabletWidth}px) {
              border-radius: 3px;
              background-color: #FFFFFF;
              box-shadow: 0 2px 6px 0 rgba(0,0,0,0.1);
              margin: 15px 15px;
              padding: 15px;
              color: ${theme.Colors.primary}
            }
          `), `padding-top padding-bottom cursor-pointer ${selectedCategory === item && "text-color-primary"}`)}
          key={item}
          onClick={this.handleCategoryClick(item)}
          data-cta-name={`${item}`}
        >
          {t(`faq:faq-data.${item}`)}
          <AngleRightIcon
            color={theme.Colors.primary}
            className={css(`
            float: right;
            @media (min-width: ${theme.Config.tabletWidth + 1}px) {
              display: none;
            }
          `)}
          />
        </div>
      );
    });
  }

  public backToCategory() {
    this.setState({ selected: false });
  }

  public renderQuestions() {
    const { t, theme } = this.props;
    return (
      <Collapse
        accordion={true}
        openIcon={<MinusIcon color={theme.Colors.primary} />}
        closeIcon={<PlusIcon color={theme.Colors.primary} />}
      >
        {this.renderQuestion()}
      </Collapse>
    );
  }

  public handleCategoryClick = (selectedCategory) => {
    return () => {
      const questions = selectedCategory === faqCategories.all ? faqQuestions : faqQuestions.filter((question) => question.category === selectedCategory);
      this.setState({ selectedCategory, questions, selected: true });
    };
  }

  public renderPanelHeader(item) {
    const { t, theme } = this.props;
    return (
      <div
        className={cx(css(`
        font-size:  1.2rem;
        @media (max-width: ${theme.Config.tabletWidth}px) {
          font-size: 1rem;
        }
      `), "text-color-primary")}
      >
        {t(`faq:faq-data.${item.question}`)}
      </div>
    );
  }

  public renderQuestion() {
    const { questions } = this.state;
    const { t, theme } = this.props;
    return questions.map((item, key) => {
      return (
        <Panel
          key={key}
          header={this.renderPanelHeader(item)}
          data-cta-name={`${item.answer}`}
          className={css(`
          @media (max-width: ${theme.Config.tabletWidth}px) {
            margin: 15px;
            width: auto;
            padding-right: 1.66rem;
          }
        `)}
        >
          <div dangerouslySetInnerHTML={{ __html: t(`faq:faq-data.${item.answer}`) }} />
        </Panel>
      );
    });
  }
}

export default Faqs;
