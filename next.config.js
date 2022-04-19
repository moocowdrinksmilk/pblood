/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/projectbloodsg/',
        permanent: false
      }
    ];
  }
}
