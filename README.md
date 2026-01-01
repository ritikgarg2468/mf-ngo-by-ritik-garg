# Musursta Foundation - NGO Landing Page

A modern, responsive landing page for Musursta Foundation, an NGO dedicated to providing shelter, education, and support to homeless children and individuals. Built with React, Node.js, and integrated with Razorpay for secure donations.

![Musursta Foundation](https://img.shields.io/badge/Musursta-Foundation-gold?style=for-the-badge&logo=react)

## 🌟 Features

- **Modern UI/UX**: Sleek, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Secure Payments**: Integrated Razorpay payment gateway for donations
- **Interactive Sections**:
  - Hero section with compelling call-to-action
  - Mission statement
  - Impact statistics
  - Three main initiatives (Plates of Kindness, Threads of Hope, Safe Haven)
  - Volunteer partners showcase
  - Contact form with validation
- **Smooth Animations**: Framer Motion powered animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized with Vite build system

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Razorpay** - Payment gateway integration
- **MongoDB/Mongoose** - Database (optional, currently using mock)
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/musursta-foundation.git
   cd musursta-foundation
   ```

2. **Install client dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

3. **Install server dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Environment Setup**
   - Copy `.env.example` to `.env` in the server directory
   - Copy `.env.example` to `.env` in the client directory
   - Add your Razorpay credentials and API URLs:
     ```
     # Server .env
     PORT=5000
     RAZORPAY_KEY_ID=your_razorpay_key_id
     RAZORPAY_KEY_SECRET=your_razorpay_key_secret
     MONGO_URI=your_mongodb_connection_string (optional)

     # Client .env
     VITE_API_URL=http://localhost:5000
     ```

## 🚀 Deployment

### Frontend Deployment
1. Build the frontend:
   ```bash
   cd client
   npm run build
   ```

2. Set the API URL in production:
   - Create/update `.env` file in client directory
   - Set `VITE_API_URL` to your production API URL:
     ```
     VITE_API_URL=https://your-api-domain.com
     ```

3. Deploy the `dist` folder to your hosting service (Vercel, Netlify, etc.)

### Backend Deployment
1. Deploy the server to a cloud platform (Heroku, Railway, Render, etc.)
2. Update the `VITE_API_URL` in the client `.env` to point to your deployed API
3. Ensure CORS is properly configured for your domain

### Environment Variables for Production
- **Development**: `VITE_API_URL=http://localhost:5000`
- **Production**: `VITE_API_URL=https://your-api-domain.com`

### Production Build

1. **Build the frontend**
   ```bash
   cd client
   npm run build
   ```

2. **Start production server**
   ```bash
   cd server
   npm start
   ```

## 📡 API Endpoints

### Payment Endpoints
- `GET /api/payment/key` - Get Razorpay public key
- `POST /api/payment/order` - Create payment order
- `POST /api/payment/verify` - Verify payment signature

### Request Examples

**Create Payment Order:**
```bash
curl -X POST http://localhost:5000/api/payment/order \
  -H "Content-Type: application/json" \
  -d '{"amount": 500}'
```

**Verify Payment:**
```bash
curl -X POST http://localhost:5000/api/payment/verify \
  -H "Content-Type: application/json" \
  -d '{
    "razorpay_payment_id": "pay_xxx",
    "razorpay_order_id": "order_xxx",
    "razorpay_signature": "signature_xxx",
    "amount": 500
  }'
```

## 📁 Project Structure

```
musursta-foundation/
├── client/                          # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Mission.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Initiatives.jsx
│   │   │   ├── Volunteers.jsx
│   │   │   ├── Donate.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── server/                          # Node.js backend
│   ├── server.js
│   ├── package.json
│   └── .env
├── .gitignore
└── README.md
```

## 🎨 Customization

### Colors
The project uses a gold/black theme defined in `client/tailwind.config.js`:
```javascript
colors: {
  'brand-gold': '#d4af37',
  'brand-black': '#0a0a0a',
}
```

### Content
Update the following files to customize content:
- `client/src/components/Hero.jsx` - Main headline and description
- `client/src/components/Mission.jsx` - Mission statement
- `client/src/components/Initiatives.jsx` - Initiative details
- `client/src/components/Contact.jsx` - Contact information

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Use meaningful component and variable names
- Add comments for complex logic
- Test your changes thoroughly
- Ensure responsive design works on all devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Musursta Foundation** for their inspiring work
- **Unsplash** for the beautiful images
- **Razorpay** for the payment integration
- **Tailwind CSS** for the amazing utility classes

## 📞 Support

For support or questions:
- Email: info@musurstafoundation.org
- Phone: +91 0000000000
- Instagram: [@musurstafoundation](https://www.instagram.com/musurstafoundation)

---

**Made with ❤️ for a better world**