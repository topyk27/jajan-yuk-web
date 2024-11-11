import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class useAppwrite {
  data: [] = [];
  isLoading = true;
  constructor(fn: Function) {
    this.fetchData(fn).finally(() => {
      return {
        data: this.data,
        isLoading: this.isLoading,
        refetch: this.fetchData,
      };
    });
  }
  public fetchData = async (fn: Function) => {
    try {
      const response = await fn();
      this.data = response;
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) alert(error.message);
    } finally {
      this.isLoading = false;
    }
  };
}
