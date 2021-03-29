import axiosInstance from '../../../redux/axiosInstance';

class ArticleService {

    deleteArticle(articleId){
        return axiosInstance.delete(`article/${articleId}`);
    }
}

export default new ArticleService()
