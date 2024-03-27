import * as React from "react";

interface Props extends React.HTMLProps<HTMLIFrameElement> {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const MetaTags: React.SFC<Props> = ({ description, image, title, url }: Props) => (
  <React.Fragment>
    {description ? (<meta name="description" content={description} key="description" />) : null}
    {url ? (<link rel="canonical" href={url} key="canonical" />) : null}
    <meta property="og:type" content="article" key="og_type" />
    {title ? (<meta property="og:title" content={title} key="og_title" />) : null}
    {description ? (<meta property="og:description" content={description} key="og_description" />) : null}
    {image ? (<meta property="og:image" content={image} key="og_image" />) : null}
    {url ? (<meta property="og:url" content={url} key="og_url" />) : null}
    <meta property="og:site_name" content="WeLend" key="og_site_name" />
    <meta property="twitter:card" content="summary" key="og_summary" />
    {title ? (<meta name="twitter:title" content={title} key="twitter_title" />) : null}
    {description ? (<meta name="twitter:description" content={description} key="twitter_description" />) : null}
    {image ? (<meta name="twitter:image" content={image} key="twitter_image" />) : null}
  </React.Fragment>
);

export default MetaTags;
