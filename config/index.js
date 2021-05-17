const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? process.env.API_URI : 'http://localhost:3000'