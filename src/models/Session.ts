import { getModelForClass, prop, Ref } from "@typegoose/typegoose"
import { User } from "./User"

export class Session {
  @prop({ ref: () => User })
  userId!: Ref<User>

  @prop({ default: true })
  valid!: boolean
}

const SessionModel = getModelForClass(Session, {
  schemaOptions: {
    timestamps: true,
  },
})

export default SessionModel
