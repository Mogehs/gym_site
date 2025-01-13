import Course from "../models/courseSchema.js";

export const createCourse = async (req, res) => {
  let { title, description, duration } = req.body;
  const token = req.cookies.token;

  try {
    if (!title || !description || !duration) {
      return res.status(401).json({
        message: "Please Give All The Information Related To The Course",
        success: false,
      });
    }

    let course = await Course.findOne({ title });
    if (course) {
      return res.status(500).json({
        message: "This Course Already Exist",
        success: false,
      });
    }

    course = new Course({
      title,
      description,
      duration,
    });

    await course.save();
    return res.status(200).json({
      message: "Course Created Successfully",
      course,
      success: true,
    });
  } catch (e) {
    return res.status(400).json({
      message: "An error occured while Creating the Course",
      success: false,
    });
  }
};

export const updateCourse = async (req, res) => {
  let courseId = req.params.id;
  try {
    let course = await Course.find({ _id: courseId });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: "Error in updating the course",
      success: false,
    });
  }
};

export const getAllCourses = async (req, res) => {
  let courses = await Course.find({});
  try {
    if (courses.length > 0) {
      return res.status(200).json({
        success: true,
        courses,
      });
    }
    return res.status(200).json({
      message: "No course Is Here",
      success: true,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      message: "An error occurred while getting the course",
      success: false,
    });
  }
};
