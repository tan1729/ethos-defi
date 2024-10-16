import { newMockEvent } from "matchstick-as"
import { ethereum } from "@graphprotocol/graph-ts"
import { ReviewAdded } from "../generated/Contract/Contract"

export function createReviewAddedEvent(
  studentName: string,
  courseName: string,
  rating1: i32,
  rating2: i32,
  feedback: string
): ReviewAdded {
  let reviewAddedEvent = changetype<ReviewAdded>(newMockEvent())

  reviewAddedEvent.parameters = new Array()

  reviewAddedEvent.parameters.push(
    new ethereum.EventParam(
      "studentName",
      ethereum.Value.fromString(studentName)
    )
  )
  reviewAddedEvent.parameters.push(
    new ethereum.EventParam("courseName", ethereum.Value.fromString(courseName))
  )
  reviewAddedEvent.parameters.push(
    new ethereum.EventParam(
      "rating1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(rating1))
    )
  )
  reviewAddedEvent.parameters.push(
    new ethereum.EventParam(
      "rating2",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(rating2))
    )
  )
  reviewAddedEvent.parameters.push(
    new ethereum.EventParam("feedback", ethereum.Value.fromString(feedback))
  )

  return reviewAddedEvent
}
