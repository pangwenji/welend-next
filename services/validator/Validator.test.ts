import Validator from "./Validator";

describe("Validator", () => {
  describe("required (default config)", () => {
    describe("with non empty values allowed", () => {
      const validator = new Validator([
        {required: true},
      ]);

      it("returns no errors for non empty string", () => {
        const errors = validator.validate("test");
        expect(errors).toBeNull();
      });

      it("returns errors for empty string", () => {
        const errors = validator.validate("");
        expect(errors.length).toBe(1);
        expect(errors[0]).toEqual({args: [], name: "required"});
      });
    });

    describe("with empty values allowed", () => {
      const validator = new Validator([
        {required: { allowEmpty: true }},
      ]);

      it("returns no errors for empty string", () => {
        const errors = validator.validate("");
        expect(errors).toBeNull();
      });
    });
  });

  describe("minLength", () => {
    const validator = new Validator([
      {minLength: 6},
    ]);

    it("returns no errors for string greater of equal to than min length", () => {
      const errors = validator.validate("alanyu");
      expect(errors).toBeNull();
    });

    it("returns errors for string less than min length", () => {
      const errors = validator.validate("alany");
      expect(errors.length).toBe(1);
      expect(errors[0]).toEqual({ name: "minLength", args: [6] });
    });
  });

  describe("maxLength", () => {
    const validator = new Validator([
      {maxLength: 6},
    ]);

    it("returns no errors for string less than or equal to max length", () => {
      const errors = validator.validate("alanyu");
      expect(errors).toBeNull();
    });

    it("returns errors for string greater than max length", () => {
      const errors = validator.validate("alanyu!");
      expect(errors.length).toBe(1);
      expect(errors[0]).toEqual({ name: "maxLength", args: [6] });
    });
  });

  describe("min", () => {
    const validator = new Validator([
      {min: 0},
    ]);

    it("returns no errors for number greater than or equal min", () => {
      const errors = validator.validate(0);
      expect(errors).toBeNull();
    });

    it("returns errors for number less than min", () => {
      const errors = validator.validate(-1);
      expect(errors.length).toBe(1);
      expect(errors[0]).toEqual({ name: "min", args: [0] });
    });
  });

  describe("max", () => {
    const validator = new Validator([
      {max: 100},
    ]);

    it("returns no errors for number less than or equal to max", () => {
      const errors = validator.validate(100);
      expect(errors).toBeNull();
    });

    it("returns errors for number greater than max", () => {
      const errors = validator.validate(101);
      expect(errors.length).toBe(1);
      expect(errors[0]).toEqual({ name: "max", args: [100] });
    });
  });

  describe("number", () => {
    const validator = new Validator([
      {number: true},
    ]);

    it("returns no errors when input is number", () => {
      const errors = validator.validate(100);
      expect(errors).toBeNull();
    });

    it("returns errors when input is not a number", () => {
      const errors = validator.validate("100");
      expect(errors.length).toBe(1);
      expect(errors[0]).toEqual({ name: "number", args: [] });
    });
  });

  describe("boolean", () => {
    const validator = new Validator([
      {boolean: true},
    ]);

    it("returns no errors when input is boolean", () => {
      const errors = validator.validate(true);
      expect(errors).toBeNull();
    });

    it("returns errors when input is not a boolean", () => {
      const errors = validator.validate("true");
      expect(errors.length).toBe(1);
      expect(errors[0]).toEqual({ name: "boolean", args: [] });
    });
  });

  describe("format", () => {
    const validator = new Validator([
      {format: /hello/i},
    ]);

    it("returns no errors when input is a correct format", () => {
      const errors = validator.validate("hello");
      expect(errors).toBeNull();
    });

    it("returns errors when input is a incorrect format", () => {
      const errors = validator.validate("heelo");
      expect(errors.length).toBe(1);
      expect(errors[0]).toEqual({ name: "format", args: [] });
    });
  });
});
