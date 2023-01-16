import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
    return (
    <Layout>
        <h3>{postData.title}</h3>
        <p className="font-medium">{postData.id}</p>
        <p className="italic">{postData.date}</p>
    </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        }
    }
}