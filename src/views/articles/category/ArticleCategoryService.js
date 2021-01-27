import axios from '../../../redux/axios/index';

class ArticleCategoryService {

    deleteArticleCategory(articleId){
        return axios.delete("category/article" + '/' + articleId);
    }
}

export default new ArticleCategoryService()
