import cheerio from 'cheerio';
import request from 'request-promise';
import IProduct from '../interfaces/IProduct';

const getMercadoLivreData = async (search: string, limit: number = 10): Promise<any[]> => {
    try {
        const body: string = await request(`https://lista.mercadolivre.com.br/${search}`);
        const $ = cheerio.load(body);
        const firstPageData: IProduct[] = [];

        $('.item__info-title').each(function (i) {
            if (!firstPageData[i] && i < limit) firstPageData[i] = { name: '', store: '', price: '', link: '' };
            i < limit ? firstPageData[i].name = $(this).text().trim() : null;
        });
        $('.price__fraction').each(function (i) {
            i < limit ? firstPageData[i].price = $(this).text().trim() : null;
        });
        $('.item__brand-title-tos').each(function (i) {
            i < limit ? firstPageData[i].store = $(this).text().slice(4).trim() : null;
        });
        $('.image-content').each(function (i) {
            i < limit ? firstPageData[i].link = $(this).find('a').attr('href').trim() : null;
        });

        return firstPageData;

    } catch (err) {
        throw new Error('NO_RESULTS_FOUND');
    }
};
export default getMercadoLivreData;
