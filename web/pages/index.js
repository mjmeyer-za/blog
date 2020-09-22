// index.js
import NextLink from 'next/link';
import groq from 'groq';
import client from '../client';
import { Divider, Heading, Link, Text } from '@chakra-ui/core';
import { Fragment } from 'react';
import Layout from '../components/layout';

const Index = (props) => {
  const { posts = [] } = props;

  return (
    <Layout>
      <Text mb="20px">
        This is but the start! I'm just trying to get rolling with putting my
        thoughts out there. I tend to procrastinate by fiddling and tweaking my
        digital spaces instead of creating content.
      </Text>
      <Text mb="20px">
        I thought making incremental improvements, like a garden, to my digital
        space will help motivate me. Once there's content, I'm going to feel bad
        for not having it look good.
      </Text>

      <Divider mb="40px" />

      <Heading as="h2" size="lg" pb="10px">
        Latest articles
      </Heading>

      {posts.map(
        ({ _id, title = '', slug = '', _updatedAt = '' }) =>
          slug && (
            <Fragment key={_id}>
              <li>
                <NextLink href="/[slug]" as={`/${slug.current}`}>
                  <Link>{title}</Link>
                </NextLink>{' '}
                ({new Date(_updatedAt).toDateString()})
              </li>
              <Divider />
            </Fragment>
          )
      )}
    </Layout>
  );
};

Index.getInitialProps = async () => ({
  // *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
  // query should look like above, but I think there's a time difference
  posts: await client.fetch(groq`
      *[_type == "post"]|order(publishedAt desc)
    `),
});

export default Index;
