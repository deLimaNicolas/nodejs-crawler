import server from './app';

const PORT: string = process.env.PORT || '4000';

server.listen(PORT, () => console.log(`Server running on Port : ${PORT}`));
