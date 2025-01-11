import TrainerApplication from "../models/trainerApplicationSchema.js";

export const addApplications = async (req, res) => {
  let userId = req.id;
  let courseId = req.params.id;
  try {
    let applications = new TrainerApplication({
      trainer: userId,
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
    let application = await TrainerApplication.findOne({ _id: applicationId });

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
