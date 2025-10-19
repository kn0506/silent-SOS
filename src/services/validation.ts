/**
 * バリデーション
 * @return バリデーション結果
 */
export const validators = {
  required: (value: string, fieldName: string) => {
    if (!value.trim()) {
      return { valid: false, message: `${fieldName} is required` };
    }
    return { valid: true };
  },
};
