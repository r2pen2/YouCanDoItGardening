// @ts-ignore
import { SiteModel } from "../libraries/Web-Legos/api/models.ts";

export class BeforeAndAfter extends SiteModel {
  constructor() {
    super("befores-and-afters", "Before And After")
  }
  images = {
    beforeSource: "",
    afterSource: "",
  }
  numbers = {
    order: null,
  }
  shortStrings = {}
  longStrings = {
    description: "",
  }
}

export class Testimonial extends SiteModel {
  constructor() {
    super("testimonials", "Testimonial")
  }
  images = {}
  numbers = {
    order: null,
  }
  shortStrings = {
    author: "",
  }
  longStrings = {
    message: "",
  }
}

export class TestimonialSlideshowPicture extends SiteModel {
  constructor() {
    super("testimonial-slideshow-pictures", "Testimonial Slideshow Picture")
  }
  images = {
    imageSource: "",
  }
  numbers = {
    order: null,
  }
  shortStrings = {}
  longStrings = {
    caption: "",
  }
}