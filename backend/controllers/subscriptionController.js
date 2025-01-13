import Subscription from "../models/subscriptionSchema.js";

export const createSubscription = async (req, res) => {
  try {
    const { title, price, startDate, endDate, status, courseIds } = req.body;

    if (!title || !price || !startDate || !endDate || !status || !courseIds) {
      return res.status(400).json({
        message: "Please provide complete information",
        success: false,
      });
    }

    let courses = courseIds.split(",");

    let sub = await Subscription.findOne({ title });
    if (sub) {
      return res.status(401).json({
        message: "The Subscription already exist",
        success: false,
      });
    }

    if (new Date(startDate) >= new Date(endDate)) {
      return res.status(400).json({
        message: "Start date must be earlier than the end date",
        success: false,
      });
    }

    const subscription = new Subscription({
      title,
      price,
      startDate,
      endDate,
      status,
      courses: courses,
      student: req.id,
    });

    await subscription.save();

    return res.status(200).json({
      message: "Subscription added successfully",
      subscription,
      success: true,
    });
  } catch (error) {
    console.error("Error creating subscription:", error.message);
    return res.status(500).json({
      message: "Error creating subscription package",
      success: false,
    });
  }
};

export const updateSubscription = async (req, res) => {
  let id = req.params.id;
  let { title, price, startDate, endDate, status, courseIds } = req.body;
  try {
    if (!title || !price || !startDate || !endDate || !status || !courseIds) {
      return res.status(400).json({
        message: "Please provide complete information",
        success: false,
      });
    }

    let courses = courseIds.split(",");

    let subscription = await Subscription.findById(id);
    if (!subscription) {
      res.status(404).json({
        messsage: "There is no such subscriprion exist",
        success: false,
      });
    }
    await Subscription.findByIdAndUpdate(id, {
      title,
      price,
      startDate,
      courses: courses,
      endDate,
      status,
    });
    return res.status(200).json({
      message: "the subsciption is updated successfully",
      success: true,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "There is an error in updating the subscription",
      success: false,
    });
  }
};

export const deleteSubscription = async (req, res) => {
  let id = req.params.id;
  try {
    if (!id) {
      return res.status(404).json({
        message: "No Id is here",
        success: false,
      });
    }
    await Subscription.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Deleted Successfully",
      success: true,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "Error in deleting the subscription",
      success: false,
    });
  }
};
