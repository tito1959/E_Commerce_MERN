import { Router } from 'express'
import { categoryWithProductsLinked, createCat, deleteCat, getAllCategories, updateCat } from '../controller/category.controller'
import { verifyTokenAdmin } from '../middleware/auth.middleware'

export const categoryRouter = Router()

/* get all categories list */
categoryRouter.get('/', getAllCategories)

/* the app required: when has been selected one category all products relationship must be show
 * in this case must go to model products and found all entries with the categories (x)
 * or can relationship everi category with products: animals { ['id1', 'id2', 'id3'] } .populate() ( mvp )
*/
categoryRouter.get('/:id', categoryWithProductsLinked)

/* only the administrator can add new category */
categoryRouter.post('/', verifyTokenAdmin, createCat)

/* only the administrator can update the categories */
categoryRouter.put('/:id', verifyTokenAdmin, updateCat)

/* only the adminsitrator can delete categories */
categoryRouter.delete('/:id', verifyTokenAdmin, deleteCat)
