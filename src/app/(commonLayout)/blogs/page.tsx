export const dynamic = 'force-dynamic';

async function Blogs() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  // throw new Error('error');
  return (
    <div>
      <h1 className="text-3xl text-blue-500">Blogs</h1>
    </div>
  );
}

export default Blogs;
