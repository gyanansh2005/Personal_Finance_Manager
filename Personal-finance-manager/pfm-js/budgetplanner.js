document.addEventListener('DOMContentLoaded', function () {
    const addCategoryBtn = document.getElementById('addCategoryBtn');
    const budgetContainer = document.querySelector('.col-lg-8 .card-body');
    addCategoryBtn.addEventListener('click', function () {
        const newCategoryCard = document.createElement('div');
        newCategoryCard.classList.add('category-card', 'card', 'my-4');
        newCategoryCard.innerHTML = `
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="mb-0">New Category</h5>
                    <span class="badge bg-secondary">Custom</span>
                </div>
                <div class="row g-3">
                    <div class="col-md-4">
                        <label class="form-label">Expense Name</label>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Expense" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Amount</label>
                        <div class="input-group">
                            <span class="input-group-text">₹</span>
                            <input type="number" class="form-control budget-input" placeholder="0">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Category Type</label>
                        <select class="form-select">
                            <option value="essential">Essential</option>
                            <option value="discretionary">Discretionary</option>
                        </select>
                    </div>
                </div>
                <div class="progress mt-3">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        `;
        budgetContainer.appendChild(newCategoryCard);
    });
});
