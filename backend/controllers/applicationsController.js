import Course from "../models/courseSchema.js";
import TrainerApplication from "../models/trainerApplicationSchema.js";
import User from "../models/userSchema.js";

export const addApplications = async (req, res) => {
  let userId = req.id;
  let courseId = req.params.id;
  try {
    let applications = new TrainerApplication({
      user: userId,
      course: courseId,
    });
    await applications.save();
    return res.status(200).json({
      message: "Application Submitted Successfully",
      applications,
      success: true,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "Error in Submitting Application",
      succes: false,
    });
  }
};

export const getApplication = async (req, res) => {
  let applicationId = req.params.id;
  try {
    let application = await TrainerApplication.findOne({ _id: applicationId });
    if (!application) {
      return res.status(404).json({
        message: "No such Application found",
        success: false,
      });
    }
    return res.status(200).json({
      application,
      success: true,
    });
  } catch (e) {
    console.log(e.message);
  }
};

export const updateApplication = async (req, res) => {
  let applicationId = req.params.id;
  let { status } = req.body;

  try {
    let application = await TrainerApplication.findOne({
      _id: applicationId,
    })
      .populate("user")
      .populate("course");

    if (!application) {
      return res.status(404).json({
        message: "No such Application found",
        success: false,
      });
    }
    if (status) {
      application.status = status;
    } else {
      return res.status(400).json({
        message: "Status is required",
        success: false,
      });
    }
    if (status == "approved" && application.user) {
      await User.findByIdAndUpdate(application.user._id, { role: "trainer" });
      let appliedCourse = await Course.findById(application.course._id);
      if (appliedCourse) {
        appliedCourse.trainers.push(application.user._id);
        await appliedCourse.save();
      }
    }
    await application.save();

    return res.status(200).json({
      message: "Application status updated successfully",
      success: true,
      application,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(404).json({
      message: "Error in updating application status",
      success: false,
    });
  }
};

export const getAllApplications = async (req, res) => {
  try {
    let applications = await TrainerApplication.find({})
      .populate("user")
      .populate("course");

    if (applications.length === 0) {
      return res.status(200).json({
        message: "No applications found",
        success: true,
        applications: [],
      });
    }

    return res.status(200).json({
      applications,
      success: true,
    });
  } catch (e) {
    console.error("Error fetching applications:", e.message);
    return res.status(500).json({
      message: "Error in getting all the applications",
      success: false,
    });
  }
};
