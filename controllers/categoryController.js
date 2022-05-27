const CategoryService = require('../services/categoryService');
let categoryService = new CategoryService();
module.exports.addCategory = async(req, res) => {
    const {categoryId, categoryName} = req.body;
    try {
        const category = await categoryService.addCategory(categoryId, categoryName);
        res.status(201).json({message:'Category created successfully', category:category});
    } catch (error){
        res.status(400).json({error:error.message});
    }
};
module.exports.getCategories = async(req, res) => {
    try {
        const categories = await categoryService.getCategories();
        res.status(200).json({categories:categories});
    } catch (error){
        res.status(400).json({error:error});
    }
};
// module.exports.getCategoryById = async(req, res) => {
//     const id = req.params.id;
//     try {
//         const category = await categoryService.getCategoryById(id);
//         res.status(200).json({category:category});
//     } catch (error){
//         res.status(400).json({error:error});
//     }
// };
// module.exports.getCategoryByName = async(req, res) => {
//     const name = req.params.name;
//     try {
//         const category = await categoryService.getCategoryByName(name);
//         res.status(200).json({category:category});
//     } catch (error){
//         res.status(400).json({error:error});
//     }
// };
module.exports.deleteCategory = async(req, res) => {
    const id = req.params.id;
    try{
        const category = await categoryService.deleteCategory(id);
        res.status(200).json({category:category});
    }catch (error){
        res.status(400).json({error:error});
    }
};
