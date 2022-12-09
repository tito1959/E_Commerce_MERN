import { Router } from 'express'
import { getUsers } from '../controller/user.controller'
import { verifyTokenAdmin } from '../middleware/auth.middleware'

export const routerUser = Router()

/**
 * Un usuario autenticado puede actualizar sus datos, pero no puede:
 * ( borrar las ordenes de compra ni editarlas o eliminarlas )
 * Un administrador autenticado puede obtener todas los usuarios registrados, y gestionarlos
 */

/* obetener todos los usuarios */
routerUser.get('/', verifyTokenAdmin, getUsers)
/* actualizar su perfil, menos las ordenes de compra */
routerUser.put('/')
/* borrar su perfil */
routerUser.delete('/')
