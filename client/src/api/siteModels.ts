// @ts-ignore
import { SiteModel } from "../libraries/Web-Legos/api/models.ts";

export class BeforeAndAfter extends SiteModel {
  collection = "befores-and-afters";
  name = "Before And After";
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