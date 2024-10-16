import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import {} from "@graphprotocol/graph-ts"
import { ReviewAdded } from "../generated/schema"
import { ReviewAdded as ReviewAddedEvent } from "../generated/Contract/Contract"
import { handleReviewAdded } from "../src/contract"
import { createReviewAddedEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let studentName = "Example string value"
    let courseName = "Example string value"
    let rating1 = 123
    let rating2 = 123
    let feedback = "Example string value"
    let newReviewAddedEvent = createReviewAddedEvent(
      studentName,
      courseName,
      rating1,
      rating2,
      feedback
    )
    handleReviewAdded(newReviewAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ReviewAdded created and stored", () => {
    assert.entityCount("ReviewAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ReviewAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "studentName",
      "Example string value"
    )
    assert.fieldEquals(
      "ReviewAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "courseName",
      "Example string value"
    )
    assert.fieldEquals(
      "ReviewAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "rating1",
      "123"
    )
    assert.fieldEquals(
      "ReviewAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "rating2",
      "123"
    )
    assert.fieldEquals(
      "ReviewAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "feedback",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
