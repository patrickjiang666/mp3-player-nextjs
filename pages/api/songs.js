// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '50kb'
        }
    }
}

export default function handler(req, res) {
    let songs = [];
    for (let i = 0; i < 15; i++) {
        let element = {
            name: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6),
            singer: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8),
        };
        songs.push(element);
    }
    res.status(200).json(songs);
  }
  