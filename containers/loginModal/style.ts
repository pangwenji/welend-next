import { css } from "emotion";
import Theme from "../../theme/theme";

const styles = (theme: Theme) => {
  return {
    formField: css`
      position: relative;
    `,
    inputFieldContainer: css`
      position: relative;
    `,
    emailInputField: css`
      background-color: transparent;
      position: relative;
      z-index: 1;
      &:focus {
        + div {
          display: grid;
        }
      }
    `,
    inputLabel: css`
      border-color: transparent;
      padding: 0;
      color: silver;
      box-shadow: none;
      cursor: default;
      user-select: none;
      margin-left: -1px;
    `,
    autoSuggestionContainer: css`
      position: absolute;
      width: 100%;
      background: ${theme.Colors.white};
      box-shadow: 0px 3px 10px -3px ${theme.Colors.lightGray};
      border: 1px solid #ddd;
      border-top: unset;
      border-radius: 0 0 3px 3px;
      display: none;
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: 1fr;
      align-items: center;
      &:hover {
        display: grid;
      }
      `,
    autoSuggestionListItem: css`
      padding: 10px;
      line-height: normal;
      cursor: pointer;
      overflow: hidden;
      overflow-wrap: break-word;
      &:hover {
        background: ${theme.Colors.lightGray};
      }
    `,
    autoSuggestionPreviewContainer: css`
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      overflow: hidden;
      padding-left: 12px;
      box-sizing: border-box;
    `,
    autoSuggestionPreviewCurrentInput: css`
      opacity: 0;
    `,
  };
};

export default styles;
