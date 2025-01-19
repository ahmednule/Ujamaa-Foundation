# Ujamaa Foundation Website

This is the official website for the Ujamaa Foundation, a community-based, youth-led organization in Wajir County. The website showcases the foundation's mission, programs, and achievements, and provides contact and donation functionality.

## Features

- **Dynamic Pages**: Information on programs, activities, and the foundation's mission.
- **Contact Us**: A functional contact form using Nodemailer to send messages directly to the foundation's email.
- **Donation Support**: A donation feature integrated into the contact functionality.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Powered by Next.js 15**: Built with modern features and SEO-friendly architecture.

## File Structure

The project is organized as follows:

```
ujamaa-foundation/
├── public/               
├── service/              
│   └── emailservice.js   
├── src/
│   ├── app/
│   │   ├── api/            
│   │   ├── components/   
│   │   ├── pages/         
│   │   ├── layout.tsx    
│   │   ├── globals.css   
│   │   ├── page.tsx      
├── lib/                  
├── .env.local            
├── next.config.js        
├── package.json          
└── README.md             
```

## Prerequisites

Ensure you have the following installed:

- Node.js 18+ (LTS recommended)
- npm, Yarn, or pnpm as a package manager

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/your-repo/ujamaa-foundation.git
cd ujamaa-foundation
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Environment Variables

Create a `.env.local` file in the project root and add the following environment variables:

```env
EMAIL_SERVICE=<your-email-service>
EMAIL_USER=<your-email-username>
EMAIL_PASS=<your-email-password>
EMAIL_TO=<recipient-email>
```

These are used for the contact and donation forms.

## Deployment

The website can be deployed on platforms like [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com). For example, with Vercel:

1. Install the Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy the project:

   ```bash
   vercel
   ```

3. Follow the prompts to deploy the project.

## Future Updates

- Add blog functionality for sharing foundation activities.
- Integrate a payment gateway for donations.
- Multilingual support for a broader audience.

## License

This project is licensed under Goymarey

## Acknowledgments

Special thanks to the Ujamaa Foundation team for their trust and support in developing this platform.
