import express from 'express';
import EquipmentController from './controller/EquipmentController';
const equipmentController = new EquipmentController;

const routes = express.Router();
/*routes.get('/', (req, resp)=>{
    return resp.json({
        message: 'Hello word'
    })
})*/

routes.get('/equipments', equipmentController.listar);

routes.post('/equipments', equipmentController.store);

export default routes;