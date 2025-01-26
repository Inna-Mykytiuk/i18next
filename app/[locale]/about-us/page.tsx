import Link from 'next/link';

export default async function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className='flex flex-col items-center justify-center mx-auto'>
        <h1>About Us</h1>
        <p>
          <b>Our Address:</b>
          123 Example Street, Los Angeles, CA
        </p>
        <Link href="/">Back</Link>
      </div>
    </main>
  );
}