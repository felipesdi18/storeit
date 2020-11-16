import {Request, response, Response} from 'express';
import db from '../database/knexfile';

class EquipmentController{
    async store(req: Request, resp: Response){
        const {descricao, estatus, dt_cadastro, dt_alteracao, iddep} = req.body;
        const createEquipment = await db('equipment').insert({
            descricao,
            estatus,
            dt_cadastro,
            dt_alteracao,
            iddep
        })
        return resp.json(createEquipment);
    }

    async listar(req: Request, resp:Response){
        const equipments = await db.select().from('equipment');
        //console.log(equipments);
        return resp.json(equipments);
    }
}

export default EquipmentController;