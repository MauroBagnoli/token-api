import { Request, Response } from 'express';
import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { inject } from 'inversify';
import TOKEN_TYPES from '../../../../core/tokens/token-types';
import { BasicTokenService } from '../../../../core/tokens/basic-token/basic-token.service';
import { IBasicTokenCreateDTO } from '../../../../core/tokens/basic-token/models/dto/requests/create-token.dto';
import { basicTokenCreateSchema } from '../schemas/token.schema'
import { validateRequest } from '../../../middlewares/validate-request';

@controller('/tokens')
export class BasicTokenController {
    constructor(@inject(TOKEN_TYPES.BasicTokenService) private tokenService: BasicTokenService) { }

    @httpPost('/basic', validateRequest(basicTokenCreateSchema))
    public async createToken(req: Request, res: Response): Promise<Response> {
        const tokenData: IBasicTokenCreateDTO = req.body;
        try {
            const token = await this.tokenService.createToken(tokenData);
            return res.status(201).json(token);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    @httpGet('/basic')
    public async getTokens(req: Request, res: Response): Promise<Response> {
        try {
            const tokens = await this.tokenService.getTokens();
            return res.status(200).json(tokens);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}
