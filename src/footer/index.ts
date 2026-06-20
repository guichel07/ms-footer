export class Footer {
  private el: HTMLElement;

  constructor(mountPoint: HTMLElement) {
    this.el = mountPoint;
  }

  render(message: string): void {
    this.el.innerHTML = `
      <footer class="app-footer">
        ${message}
      </footer>
      `;
  }
}
