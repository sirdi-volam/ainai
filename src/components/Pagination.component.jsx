
export const Pagination = () => {
  return (
    <>
      <div className="pagination">
        <button className="button-pagination button-back">
          <a href="#back">
            &lt;
          </a>
        </button>
        <button className="button-dots">
          ...
        </button>
        <button className="button-pagination button-1">
          <a href="#1">
            1
          </a>
        </button>
        <button className="button-pagination button-2">
          <a href="#2">
            2
          </a>
        </button>
        <button className="button-pagination button-3">
          <a href="#3">
            3
          </a>
        </button>
        <button className="button-dots">
          ...
        </button>
        <button className="button-pagination button-next">
          <a href="#next">
            &gt;
          </a>
        </button>
      </div>
    </>
  )
}
