import Head from 'next/head';
// import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  // console.log(allPostsData)
  return {
    props: {
      allPostsData,
    }
  }
}


export default function Home({ allPostsData }) {
  // console.log(allPostsData);
  // console.log( getAllPostIds());
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* <Link href="/posts/first-post" className="text-blue-500">My first post</Link> */}
        <p>This is my little blog to learn and practive NextJS. </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <ul className={`${utilStyles.list} mt-5`}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <p className="font-medium">{id}</p>
              <p className="italic">{date}</p>
            </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}