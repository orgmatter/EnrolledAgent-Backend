import axiosInstance from '../../../redux/axiosInstance/';

class ArticleCategoryService {

    deleteArticleCategory(articleId){
        return axiosInstance.delete("category/article" + '/' + articleId);
    }
}

export default new ArticleCategoryService()
