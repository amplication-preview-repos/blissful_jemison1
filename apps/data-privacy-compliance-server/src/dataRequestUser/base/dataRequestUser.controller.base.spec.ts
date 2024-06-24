import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { DataRequestUserController } from "../dataRequestUser.controller";
import { DataRequestUserService } from "../dataRequestUser.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  companyLookup: "exampleCompanyLookup",
  companyRelation: "exampleCompanyRelation",
  createdAt: new Date(),
  createdDateTime: new Date(),
  id: "exampleId",
  requestCreatedAt: new Date(),
  updatedAt: new Date(),
  userLookup: "exampleUserLookup",
  userRelation: "exampleUserRelation",
};
const CREATE_RESULT = {
  companyLookup: "exampleCompanyLookup",
  companyRelation: "exampleCompanyRelation",
  createdAt: new Date(),
  createdDateTime: new Date(),
  id: "exampleId",
  requestCreatedAt: new Date(),
  updatedAt: new Date(),
  userLookup: "exampleUserLookup",
  userRelation: "exampleUserRelation",
};
const FIND_MANY_RESULT = [
  {
    companyLookup: "exampleCompanyLookup",
    companyRelation: "exampleCompanyRelation",
    createdAt: new Date(),
    createdDateTime: new Date(),
    id: "exampleId",
    requestCreatedAt: new Date(),
    updatedAt: new Date(),
    userLookup: "exampleUserLookup",
    userRelation: "exampleUserRelation",
  },
];
const FIND_ONE_RESULT = {
  companyLookup: "exampleCompanyLookup",
  companyRelation: "exampleCompanyRelation",
  createdAt: new Date(),
  createdDateTime: new Date(),
  id: "exampleId",
  requestCreatedAt: new Date(),
  updatedAt: new Date(),
  userLookup: "exampleUserLookup",
  userRelation: "exampleUserRelation",
};

const service = {
  createDataRequestUser() {
    return CREATE_RESULT;
  },
  dataRequestUsers: () => FIND_MANY_RESULT,
  dataRequestUser: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("DataRequestUser", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DataRequestUserService,
          useValue: service,
        },
      ],
      controllers: [DataRequestUserController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /dataRequestUsers", async () => {
    await request(app.getHttpServer())
      .post("/dataRequestUsers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        createdDateTime: CREATE_RESULT.createdDateTime.toISOString(),
        requestCreatedAt: CREATE_RESULT.requestCreatedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /dataRequestUsers", async () => {
    await request(app.getHttpServer())
      .get("/dataRequestUsers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          createdDateTime: FIND_MANY_RESULT[0].createdDateTime.toISOString(),
          requestCreatedAt: FIND_MANY_RESULT[0].requestCreatedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /dataRequestUsers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dataRequestUsers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /dataRequestUsers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dataRequestUsers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        createdDateTime: FIND_ONE_RESULT.createdDateTime.toISOString(),
        requestCreatedAt: FIND_ONE_RESULT.requestCreatedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /dataRequestUsers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/dataRequestUsers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        createdDateTime: CREATE_RESULT.createdDateTime.toISOString(),
        requestCreatedAt: CREATE_RESULT.requestCreatedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/dataRequestUsers")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
