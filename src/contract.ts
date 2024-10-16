import { ReviewAdded as ReviewAddedEntity } from "../generated/schema"; // Correct the entity import
import { ReviewAdded as ReviewAddedEvent } from "../generated/Contract/Contract"; // Adjust to match your generated types

export function handleReviewAdded(event: ReviewAddedEvent): void {
    // Use the event's ID to create a new ReviewAdded entity
    let review = new ReviewAddedEntity(event.params.id.toString()); // Convert ID to string

    review.studentName = event.params.studentName;
    review.courseName = event.params.courseName;
    review.rating1 = event.params.rating1;
    review.rating2 = event.params.rating2;
    review.feedback = event.params.feedback;
    review.blockNumber = event.block.number;
    review.blockTimestamp = event.block.timestamp;
    review.transactionHash = event.transaction.hash;

    review.save();
}
