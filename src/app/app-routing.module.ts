import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { EducationComponent } from './education/education.component';
import { InternshipComponent } from './internship/internship.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { DeclarationComponent } from './declaration/declaration.component';


const routes: Routes = [
  {
    path: "",
    component: GeneralInfoComponent
  },
  {
    path: "education",
    component: EducationComponent
  },
  {
    path: "internships",
    component: InternshipComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "skills",
    component: SkillsComponent
  },
  {
    path: "certification",
    component: CertificationsComponent
  },
  {
    path: "achievements",
    component: AchievementsComponent
  },
  {
    path: "declaration",
    component: DeclarationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
