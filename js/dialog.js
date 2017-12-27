function dialogFn() {
    this.closeBtn = null;
    this.timer = null;
    this.num = 0;
}
dialogFn.prototype.init = function() {
    // 创建结构
    this.create();
    // 关闭
    this.closeFn();
};
dialogFn.prototype.create = function() {
    this.dialog = document.createElement('div');
    this.dialog.className = 'dialog';
    this.dialog.innerHTML = `
                            <div class="head">
					            <span class="close">X</span>
					            <h3>${'一个弹框'}</h3>
					        </div>
					        <div class="content">${'内容'}</div>
                            `
    document.body.appendChild(this.dialog);
    this.closeBtn = document.getElementsByClassName('close')[0];
    // 渐入
    this.timeFn();
}
dialogFn.prototype.timeFn = function() {
    var that = this;
    this.timer = setInterval(function() {
        that.num += 0.1;
        that.dialog.style.opacity = that.num;
        if (that.num >= 1) {
            clearInterval(that.timer);
        }
    }, 100)
}

dialogFn.prototype.closeFn = function() {
    var that = this;
    this.closeBtn.onclick = function() {
        document.body.removeChild(that.dialog);

    }
}