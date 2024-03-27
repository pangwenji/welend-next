import { css, cx, injectGlobal } from "emotion";
import * as React from "react";
import withTheme, { InjectedThemeProps } from "../../../theme/withTheme";

interface Props extends React.HTMLAttributes<HTMLDivElement>, InjectedThemeProps {
  noGutter?: boolean;
}

export const GridContext = React.createContext({ noGutter: false });

const Container: React.SFC<Props> = ({ className, theme, children, noGutter, ...props}: Props) => {
  const { GridTheme } = theme;

  // tslint:disable-next-line
  injectGlobal`
    .col-1 {
      max-width: 4.166666%;
    }
    .col-2 {
      max-width: 8.333333%;
    }
    .col-3 {
      max-width: 12.5%;
    }
    .col-4 {
      max-width: 16.666666%;
    }
    .col-5 {
      max-width: 20.833333%;
    }
    .col-6 {
      max-width: 25%;
    }
    .col-7 {
      max-width: 29.166666%;
    }
    .col-8 {
      max-width: 33.333333%;
    }
    .col-9 {
      max-width: 37.5%;
    }
    .col-10 {
      max-width: 41.666666%;
    }
    .col-11 {
      max-width: 45.833333%;
    }
    .col-12 {
      max-width: 50%;
    }
    .col-13 {
      max-width: 54.166666%;
    }
    .col-14 {
      max-width: 58.333333%;
    }
    .col-15 {
      max-width: 62.5%;
    }
    .col-16 {
      max-width: 66.666666%;
    }
    .col-17 {
      max-width: 70.833333%;
    }
    .col-18 {
      max-width: 75%;
    }
    .col-19 {
      max-width: 79.166666%;
    }
    .col-20 {
      max-width: 83.333333%;
    }
    .col-21 {
      max-width: 87.5%;
    }
    .col-22 {
      max-width: 91.666666%;
    }
    .col-23 {
      max-width: 95.833333%;
    }
    .col-24 {
      max-width: 100%;
    }

    @media (min-width: 576px) {
      .col-sm-1 {
        max-width: 4.166666%;
      }
      .col-sm-2 {
        max-width: 8.333333%;
      }
      .col-sm-3 {
        max-width: 12.5%;
      }
      .col-sm-4 {
        max-width: 16.666666%;
      }
      .col-sm-5 {
        max-width: 20.833333%;
      }
      .col-sm-6 {
        max-width: 25%;
      }
      .col-sm-7 {
        max-width: 29.166666%;
      }
      .col-sm-8 {
        max-width: 33.333333%;
      }
      .col-sm-9 {
        max-width: 37.5%;
      }
      .col-sm-10 {
        max-width: 41.666666%;
      }
      .col-sm-11 {
        max-width: 45.833333%;
      }
      .col-sm-12 {
        max-width: 50%;
      }
      .col-sm-13 {
        max-width: 54.166666%;
      }
      .col-sm-14 {
        max-width: 58.333333%;
      }
      .col-sm-15 {
        max-width: 62.5%;
      }
      .col-sm-16 {
        max-width: 66.666666%;
      }
      .col-sm-17 {
        max-width: 70.833333%;
      }
      .col-sm-18 {
        max-width: 75%;
      }
      .col-sm-19 {
        max-width: 79.166666%;
      }
      .col-sm-20 {
        max-width: 83.333333%;
      }
      .col-sm-21 {
        max-width: 87.5%;
      }
      .col-sm-22 {
        max-width: 91.666666%;
      }
      .col-sm-23 {
        max-width: 95.833333%;
      }
      .col-sm-24 {
        max-width: 100%;
      }
    }

    @media (min-width: 768px) {
      .col-md-1 {
        max-width: 4.166666%;
      }
      .col-md-2 {
        max-width: 8.333333%;
      }
      .col-md-3 {
        max-width: 12.5%;
      }
      .col-md-4 {
        max-width: 16.666666%;
      }
      .col-md-5 {
        max-width: 20.833333%;
      }
      .col-md-6 {
        max-width: 25%;
      }
      .col-md-7 {
        max-width: 29.166666%;
      }
      .col-md-8 {
        max-width: 33.333333%;
      }
      .col-md-9 {
        max-width: 37.5%;
      }
      .col-md-10 {
        max-width: 41.666666%;
      }
      .col-md-11 {
        max-width: 45.833333%;
      }
      .col-md-12 {
        max-width: 50%;
      }
      .col-md-13 {
        max-width: 54.166666%;
      }
      .col-md-14 {
        max-width: 58.333333%;
      }
      .col-md-15 {
        max-width: 62.5%;
      }
      .col-md-16 {
        max-width: 66.666666%;
      }
      .col-md-17 {
        max-width: 70.833333%;
      }
      .col-md-18 {
        max-width: 75%;
      }
      .col-md-19 {
        max-width: 79.166666%;
      }
      .col-md-20 {
        max-width: 83.333333%;
      }
      .col-md-21 {
        max-width: 87.5%;
      }
      .col-md-22 {
        max-width: 91.666666%;
      }
      .col-md-23 {
        max-width: 95.833333%;
      }
      .col-md-24 {
        max-width: 100%;
      }
    }

    @media (min-width: 992px) {
      .col-lg-1 {
        max-width: 4.166666%;
      }
      .col-lg-2 {
        max-width: 8.333333%;
      }
      .col-lg-3 {
        max-width: 12.5%;
      }
      .col-lg-4 {
        max-width: 16.666666%;
      }
      .col-lg-5 {
        max-width: 20.833333%;
      }
      .col-lg-6 {
        max-width: 25%;
      }
      .col-lg-7 {
        max-width: 29.166666%;
      }
      .col-lg-8 {
        max-width: 33.333333%;
      }
      .col-lg-9 {
        max-width: 37.5%;
      }
      .col-lg-10 {
        max-width: 41.666666%;
      }
      .col-lg-11 {
        max-width: 45.833333%;
      }
      .col-lg-12 {
        max-width: 50%;
      }
      .col-lg-13 {
        max-width: 54.166666%;
      }
      .col-lg-14 {
        max-width: 58.333333%;
      }
      .col-lg-15 {
        max-width: 62.5%;
      }
      .col-lg-16 {
        max-width: 66.666666%;
      }
      .col-lg-17 {
        max-width: 70.833333%;
      }
      .col-lg-18 {
        max-width: 75%;
      }
      .col-lg-19 {
        max-width: 79.166666%;
      }
      .col-lg-20 {
        max-width: 83.333333%;
      }
      .col-lg-21 {
        max-width: 87.5%;
      }
      .col-lg-22 {
        max-width: 91.666666%;
      }
      .col-lg-23 {
        max-width: 95.833333%;
      }
      .col-lg-24 {
        max-width: 100%;
      }
    }

    @media (min-width: 1200px) {
      .col-xl-1 {
        max-width: 4.166666%;
      }
      .col-xl-2 {
        max-width: 8.333333%;
      }
      .col-xl-3 {
        max-width: 12.5%;
      }
      .col-xl-4 {
        max-width: 16.666666%;
      }
      .col-xl-5 {
        max-width: 20.833333%;
      }
      .col-xl-6 {
        max-width: 25%;
      }
      .col-xl-7 {
        max-width: 29.166666%;
      }
      .col-xl-8 {
        max-width: 33.333333%;
      }
      .col-xl-9 {
        max-width: 37.5%;
      }
      .col-xl-10 {
        max-width: 41.666666%;
      }
      .col-xl-11 {
        max-width: 45.833333%;
      }
      .col-xl-12 {
        max-width: 50%;
      }
      .col-xl-13 {
        max-width: 54.166666%;
      }
      .col-xl-14 {
        max-width: 58.333333%;
      }
      .col-xl-15 {
        max-width: 62.5%;
      }
      .col-xl-16 {
        max-width: 66.666666%;
      }
      .col-xl-17 {
        max-width: 70.833333%;
      }
      .col-xl-18 {
        max-width: 75%;
      }
      .col-xl-19 {
        max-width: 79.166666%;
      }
      .col-xl-20 {
        max-width: 83.333333%;
      }
      .col-xl-21 {
        max-width: 87.5%;
      }
      .col-xl-22 {
        max-width: 91.666666%;
      }
      .col-xl-23 {
        max-width: 95.833333%;
      }
      .col-xl-24 {
        max-width: 100%;
      }
    }
  `;

  return (
    <div
      className={cx(css`
        padding-left: ${noGutter ? 0 : GridTheme.gutter};
        padding-right: ${noGutter ? 0 : GridTheme.gutter};
        overflow: auto;

        .animated-container {
          overflow: hidden;
        }
      `, className)}
      {...props}
    >
      <GridContext.Provider value={{ noGutter: !!noGutter }}>
        {children}
      </GridContext.Provider>
    </div>
  );
};

export default withTheme(Container);
