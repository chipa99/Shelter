import { connect } from 'mongoose'
import { User } from '~~/server/models/user.model'
import { Pet } from '~~/server/models/pet.model'

export default defineNitroPlugin(async () => {
    await connect("mongodb://localhost:27017/shelter");
    [User, Pet].forEach(model => void model.modelName);
})

