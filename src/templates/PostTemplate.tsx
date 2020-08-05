import React from 'react';
import Layout from '../components/layout';
import { ITemplateProps } from '../interface';
import Utterances from '../components/Utterances';

type IPostTemplateProps = ITemplateProps<{
    html: string;
    title: string;
}>;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo(props => {
    const { title, html } = props.pageContext;
    return (
        <Layout>
            <h2>{title}</h2>
            {/*<h4>{date}</h4>*/}
            <hr />
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <Utterances repo="soo777/ssoolog-comments" />
        </Layout>
    );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;