import axios from '../../../redux/axios/index';

class ArticleService {

    deleteArticle(articleId){
        return axios.delete("article" + '/' + articleId);
    }
}

export default new ArticleService()
