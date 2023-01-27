import Link from 'next/link'
import { FS, Path } from 'lib/utils'
import { evolve, map, pipe } from 'ramda'

export const getStaticProps = async () => ({
  props: {
    posts: await FS.glob('posts/**/*.{md,mdx}').then(
      map(
        pipe(
          evolve({
            dir: Path.relative('posts'),
          }),
          ({ dir, name }) => Path.join(dir, name),
        ),
      ),
    ),
  },
})

const Index = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post}>
        <Link href={`/${post}`}>{post}</Link>
      </li>
    ))}
  </ul>
)

export default Index
