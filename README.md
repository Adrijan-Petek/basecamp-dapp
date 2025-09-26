# BaseCamp - Beginner-Friendly Base dApp Template

This template provides a full-stack Base dApp for beginners, including:
- Frontend (Next.js + React)
- Wallet connection (MetaMask & Coinbase Wallet SDK)
- Simple smart contracts (Token faucet + NFT minter)
- Optional backend API for off-chain interaction

## Quick Start

### 1. Clone Repo
```bash
git clone <repo_url>
cd basecamp-dapp
```

### 2. Install Dependencies
```bash
cd frontend
npm install
cd ../backend
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env` in both `frontend` and `backend` and fill in your keys.
- FRONTEND: REACT_APP_BASE_RPC, REACT_APP_COINBASE_KEY
- BACKEND: PRIVATE_KEY, BASESCAN_API_KEY

### 4. Run Frontend
```bash
cd frontend
npm run dev
```

### 5. Run Backend (Optional)
```bash
cd backend
node server.js
```

### 6. Deploy Contracts (Hardhat)
```bash
npx hardhat run scripts/deploy.js --network baseSepolia
```

### 7. Testing
```bash
cd frontend
npm run test
cd ../backend
npm test
```

### 8. GitHub Actions
- Frontend build & lint
- Backend tests
- Smart contract compile & test
