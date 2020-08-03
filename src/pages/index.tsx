import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { Query } from '../graphql-types';

const IndexPage: React.FC = () => {
    const LatestPostListQuery = graphql`
        query LatestPostListQuery {
            allMarkdownRemark(sort: { order: DESC, fields: frontmatter___title }) {
                edges {
                    node {
                        excerpt(truncate: true, pruneLength: 200)
                        frontmatter {
                            title
                            path
                            date(formatString: "YYYY-MM-DD HH:mm:ss")
                        }
                        id
                    }
                }
            }
        }
    `;

    const data = useStaticQuery<Query>(LatestPostListQuery);

    return (
        <Layout>
            <SEO title="Home" />
            <h1>최근 작성한 게시글 목록</h1>
            <ul>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <li key={node.id}>
                        <h2>
                            <Link to={node.frontmatter.path}>{node.frontmatter.path}</Link>
                        </h2>
                        <h3>{node.frontmatter.date}</h3>
                        <p>{node.excerpt}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export default IndexPage;
