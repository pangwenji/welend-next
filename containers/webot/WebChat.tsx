import { DirectLine } from "botframework-directlinejs";
import dynamic from "next/dynamic";
import * as React from "react";
import config from "../../config";
import Colors from "../../theme/welend/Colors";

const WEBCHAT_CONVERSATION_ID_KEY_NAME = "webchat.conversation.id";
const WEBCHAT_USERD_ID_KEY_NAME = "webchat.user.id";

interface Props {}

class WebChat extends React.PureComponent<Props> {
  private directLine: DirectLine;

  constructor(props: Props) {
    super(props);

    const conversationId = this.readSession(WEBCHAT_CONVERSATION_ID_KEY_NAME);
    this.directLine = new DirectLine({
      secret: config.botframeworkSecret,
      conversationId,
      webSocket: false,
    });
    if (!conversationId) {
      this.directLine.activity$.subscribe((activity) =>
        this.writeSession(
          WEBCHAT_CONVERSATION_ID_KEY_NAME,
          activity.conversation.id,
        ),
      );
    }
  }

  public shouldComponentUpdate() {
    return false;
  }

  public render(): any {
    const DynamicComponentWithNoSSR = dynamic(
      () => import("botframework-webchat"),
      {
        ssr: false,
      },
    );
    let userId = this.readSession(WEBCHAT_USERD_ID_KEY_NAME);
    if (!userId) {
      userId = `web_${new Date().getTime().toString().slice(4)}`;
      this.writeSession(WEBCHAT_USERD_ID_KEY_NAME, userId);
    }
    return (
      <DynamicComponentWithNoSSR
        directLine={this.directLine}
        userID={userId}
        username=""
        styleOptions={{
          hideUploadButton: true,
          rootWidth: "100%",
          rootHeight: "100%",
          backgroundColor: "#bfd6e6",
          bubbleBackground: "#93b4cb",
          bubbleTextColor: Colors.white,
          bubbleBorder: "solid 0px 1px 1px 0px rgba(0, 0, 0, 0.2)",
          bubbleBorderRadius: 5,
          bubbleFromUserBorder: "solid 0px 1px 1px 0px rgba(0, 0, 0, 0.2)",
          bubbleFromUserBorderRadius: 5,
          sendBoxButtonColor: Colors.primary,
          sendBoxHeight: 50,
          suggestedActionBackground: Colors.primary,
          suggestedActionBorder: "none",
          suggestedActionBorderRadius: 10,
          suggestedActionTextColor: Colors.white,
        }}
        locale="zh-tw"
      />
    );
  }

  private readSession(sessionKey: string) {
    if (!window.sessionStorage) {
      throw new Error("sessionStorage is not supported");
    } else {
      return sessionStorage.getItem(sessionKey);
    }
  }

  private writeSession(sessionKey: string, sessionValue: string) {
    if (!window.sessionStorage) {
      throw new Error("sessionStorage is not supported");
    } else {
      sessionStorage.setItem(sessionKey, sessionValue);
    }
  }
}

export default WebChat;
