import messages from '../../../config/messages';
import MediaLibrary from '../../../common/models/media-library.model';
import { handler as ErrorHandel } from '../../middlewares/errors';

/**
 * Create
 *
 * @public
 * @param body as media
 * @returns {Promise<MediaLibrary>, APIException>}
 */
exports.create = async (req, res, next) => {
    try {
        const medias = [];
        req.files.forEach(file => {
            const body = {
                fileName: file.filename,
                fileType: file.mimetype,
                fileSize: file.size,
                link: `https://be-form-tool.onrender.com/assets/${file.filename}`,
                createdBy: {
                    id: 'vanhaiit',
                    name: 'VanhaiIT'
                }
            };
            medias.push(body);
        });
        await MediaLibrary.insertMany(medias);
        return res.json({
            code: 0,
            message: messages.CREATE_SUCCESS,
            medias: medias
        });
    } catch (ex) {
        return ErrorHandel(ex, req, res, next);
    }
};

