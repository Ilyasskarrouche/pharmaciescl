export default function SideBar(){
    return(
        <>
     




<aside id="sidebar" className="sidebar">

  <ul className="sidebar-nav" id="sidebar-nav">

    <li className="nav-item">
      <a className="nav-link " href="index.html">
        <i className="bi bi-grid"></i>
        <span>Dashboard</span>
      </a>
    </li>

    
   

   
    <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="charts-chartjs.html">
            <i className="bi bi-circle"></i><span>Chart.js</span>
          </a>
        </li>
        <li>
          <a href="charts-apexcharts.html">
            <i className="bi bi-circle"></i><span>ApexCharts</span>
          </a>
        </li>
        <li>
          <a href="charts-echarts.html">
            <i className="bi bi-circle"></i><span>ECharts</span>
          </a>
        </li>
      </ul>
    </li>

  

    <li className="nav-heading">Pages</li>

    

    

    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-error-404.html">
        <i className="bi bi-dash-circle"></i>
        <span>Error 404</span>
      </a>
    </li>

    

  </ul>

</aside>


        </>
    )
}